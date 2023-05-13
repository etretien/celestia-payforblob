package lnpayforblob

import (
	"context"
	"encoding/hex"
	"encoding/json"
	"ln-payforblob/internal/app/models"
	"ln-payforblob/tools"
	"net/http"
	"cosmossdk.io/math"
	"github.com/celestiaorg/celestia-node/api/rpc/client"
)

// POST /payforblob
func (api *PayForBlob) RPCPFB(writer http.ResponseWriter, request *http.Request) {
	dec := json.NewDecoder(request.Body)
	dec.DisallowUnknownFields()
	bodyRequest := &models.RPCPayRequestBody{Fee: 2000, GasLimit: 80000}
	bodyResponse := models.RPCPayResponseBody{Status: "error"}
	if err := dec.Decode(&bodyRequest); err != nil {
		bodyResponse.ErrorMessage = err.Error()
		tools.JSONResponse(writer, &bodyResponse, http.StatusBadRequest)
		return
	}
	namespaceId := []byte(bodyRequest.NamespaceId)
    checkNamespaceId, err := hex.Decode(make([]byte, hex.DecodedLen(len(namespaceId))), namespaceId)
    if err != nil {
		bodyResponse.ErrorMessage = err.Error()
		tools.JSONResponse(writer, &bodyResponse, http.StatusBadRequest)
		return
    }
	if checkNamespaceId != 8 {
		bodyResponse.ErrorMessage = "invalid len namespace_id"
		tools.JSONResponse(writer, &bodyResponse, http.StatusBadRequest)
		return
	}
	data := []byte(bodyRequest.Data)
	checkData, err := hex.Decode(make([]byte, hex.DecodedLen(len(data))), data)
    if err != nil {
		bodyResponse.ErrorMessage = err.Error()
		tools.JSONResponse(writer, &bodyResponse, http.StatusBadRequest)
		return
    }
	if checkData > 100 {
		bodyResponse.ErrorMessage = "invalid len data"
		tools.JSONResponse(writer, &bodyResponse, http.StatusBadRequest)
		return
	}
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	rpc, err := client.NewClient(ctx, tools.GetEnv("HOST_CELESTIA_RPC", "127.0.0.1:26658"), tools.GetEnv("TOKEN_CELESTIA", ""))
	if err != nil {
		bodyResponse.ErrorMessage = err.Error()
		tools.JSONResponse(writer, &bodyResponse, http.StatusInternalServerError)
		return
    }
	byteNamespaceId, _ := hex.DecodeString(bodyRequest.NamespaceId)
	byteData, _ := hex.DecodeString(bodyRequest.Data)
	response, err := rpc.State.SubmitPayForBlob(ctx, byteNamespaceId, byteData, math.NewIntFromUint64(bodyRequest.Fee), bodyRequest.GasLimit)
	if err != nil {
		bodyResponse.ErrorMessage = err.Error()
		tools.JSONResponse(writer, &bodyResponse, http.StatusInternalServerError)
		return
    }
	if response.Code != 0 {
		bodyResponse.ErrorMessage = response.RawLog
		tools.JSONResponse(writer, &bodyResponse, http.StatusInternalServerError)
		return
	}
	bodyResponse = models.RPCPayResponseBody{Status: "ok", ErrorMessage: "", Result: &response}
	tools.JSONResponse(writer, &bodyResponse, http.StatusOK)
}
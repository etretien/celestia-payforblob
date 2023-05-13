package models

type RPCPayRequestBody struct {
	NamespaceId string `json:"namespace_id"`
	Data        string `json:"data"`
	Fee         uint64 `json:"fee"`
	GasLimit    uint64 `json:"gas_limit"`
}

type RPCPayResponseBody struct {
	Status       string      `json:"status"`
	ErrorMessage string      `json:"errorMessage"`
	Result       interface{} `json:"result"`
}

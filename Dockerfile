FROM golang:1.19 as builder

WORKDIR /build
COPY . .

RUN go build -o /appd cmd/ln-payforblob/server.go

FROM debian

# RUN apk --no-cache add curl jq bash

WORKDIR /root

COPY --from=builder /appd /root/appd

EXPOSE 10000

CMD [ "/root/appd" ]

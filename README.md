# Celestia PayForBlob UI

This repository contains the UI for submitting PayForBlob transactions to the Celestia testnet. It includes both a backend and a frontend, each of which can be built and run using Docker.

This project was made base as part of Lucidnode - https://lucidnode.com/

Live version: https://pfb.celestia.lucidnode.com/celestia/submit_payforblob_transaction

## Prerequisites

- Docker
- RPC access to a Celestia light node, using token authentication. You can get an auth token by running the CLI on your node: 

celestia light auth admin --p2p.network blockspacerace

## Installation

Clone the repository:

git clone git@github.com:etretien/celestia-payforblob.git

## Building and Running the Backend

Navigate to the project directory:

cd celestia-payforblob

Build the Docker image:

docker build -t ln-payforblob-back .

After building and getting the token, you can start the container:

docker run -d --env TOKEN_CELESTIA=<auth token> --env HOST_CELESTIA_RPC=<address:port> -p 10000:10000 ln-payforblob-back

Replace <auth token> with your Celestia auth token and <address:port> with your Celestia RPC address and port.

## Building and Running the Frontend

Navigate to the web directory:

cd web

Build the Docker image:

docker build -t ln-payforblob-next --build-arg NEXT_PUBLIC_API_URL=https://pfb.celestia.lucidnode.com/payforblob .

Replace https://pfb.celestia.lucidnode.com/payforblob with your backend address and port.

Run the Docker container:

docker run -d -p 3000:3000 ln-payforblob-next

The application will be available at http://localhost:3000.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

  

# Frontend Documentation

## OpenNetra: Project Description

![netra dash](https://hackmd.io/_uploads/Bk2avI4ST.jpg)


Open Netra, standing for Open Network Training, is a comprehensive solution designed to facilitate the training, simulation, and management of 5G networks. The primary functionalities of Open Netra include E2E (End-to-End) 5G dashboard simulation and RAN (Radio Access Network) monitoring & configuration. The entire infrastructure is built on a foundation of virtualized network functions, specifically implemented as OpenAirInterface containers, orchestrated and managed by Kubernetes.

## Pre-requisite

* **NodeJs Installation**
    * Download and import the Nodesource GPG key 

        ```=bash
        sudo apt-get update
        sudo apt-get install -y ca-certificates curl gnupg
        sudo mkdir -p /etc/apt/keyrings
        curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
        ```
    * Create deb repository
        ```=bash
        NODE_MAJOR=20
        echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
        ```
    * Run Update and Install
        ```
        sudo apt-get update
        sudo apt-get install nodejs -y
        ```
    * **NOTE: IN CASE IF YOU WANT TO UNINSTALL IT**

        ```=bash
        apt-get purge nodejs &&\
        rm -r /etc/apt/sources.list.d/nodesource.list &&\
        rm -r /etc/apt/keyrings/nodesource.gpg
        ```

* **Yarn Installation**
    * Install Yarn via npm

        ```=bash
        npm install --global yarn
        ```
    * Check the version

        ```=bash
        yarn --version
        ```
* **Vue CLI Installation**
    * Install Vue via npm
        ```=bash
        npm install -g @vue/cli
        ```
    * Check the version

        ```=bash
        vue --version
        ```
        
* **Project Instantiation**
    * Clone the frontend repository
        ```=bash
        git clone https://github.com/adaptivenetworklab/AN-OPEN-NETRA-FE.git
        cd AN-OPEN-NETRA-FE
        ```
    * Start developing on localhost

        ```
        yarn install
        yarn serve
        ```
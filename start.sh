#!/bin/bash

Usage(){
    echo "./start.sh [start_type] [address] [port]"
    echo "start_type support all server web"
    echo "address default: 0.0.0.0"
    echo "port default: server: 8080, web: 8000"
}

P_NUM=$#
PROPATH=$(pwd)

change_python_version(){
    PY_VERSION=`python -V`
    NEED_VERSION="Python 3.6.8"
    if [ "$PY_VERSION" != "$NEED_VERSION" ]; then
        pyenv actiovate venv
    fi
}

start_server(){
    echo "Start Server $1 $2..."
    change_python_version
    python $PROPATH/server/manage.py runserver $ADDR:$PORT
}

start_web(){
    echo "Start Web"
    cd $PROPATH/web/src && umi dev
}

start_all(){
    start_server
    sleep 3
    start_web
}

judge_params(){
    if [ -z $START ]; then
        START="all"
    elif [ -z $ADDR ]; then
        ADDR=0.0.0.0
    elif [ -z $PORT ]; then
        PORT=8080
    fi
}

start(){
    START=$1
    ADDR=$2
    PORT=$3
    if [ $START == 'all' ]; then
        start_all
    elif [ $START == 'server' ]; then
        start_server ADDR PORT
    elif [ $START == 'web' ]; then
        start_web
    fi
}


while [ $# != 0 ]
do
    if [ $1 == "--addr" ] || [ $1 == "-ip" ]; then
        shift
        ADDR=$1
        shift
    elif [ $1 == 'port' ] || [ $1 == "-p" ];then
        shift
        PORT=$1
        shift
    elif [ $1 == "type" ] || [ $1 == "-t" ]; then
        shift
        START=$1
        shift
    else
        Usage
        exit
    fi
done

judge_params
start $START $ADDR $PORT


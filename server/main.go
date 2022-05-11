package main

import (
	. "fmt"
	"log"
	"net/http"
) 


func TestHomePage(res http.ResponseWriter, req *http.Request){
	Fprintf(res, "Let's build the infra....")
}

func apiHandler(){
	PORT := ":1337"
	http.HandleFunc("/", TestHomePage)
	Printf("Live at http://localhost%s", PORT)
	log.Fatal(http.ListenAndServe(PORT, nil))
}

func main(){
	apiHandler();
}
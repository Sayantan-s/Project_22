package main

import (
	"net/http"
	. "fmt"
	"log"
) 


func TestHomePage(res http.ReponseWriter, req *http.Request){
	Fprintf(res, "Let's build the infra....")
}

func apiHandler(){
	PORT := ":1337"
	http.HandleFunc("/", TestHomePage)
	Printf("Live at http://localhost%s", PORT)
	log.fatal(http.ListenAndServe(PORT, nil))
}

func main(){
	apiHandler();
}
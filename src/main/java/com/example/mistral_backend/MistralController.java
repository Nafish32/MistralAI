package com.example.mistral_backend;

import org.springframework.ai.mistralai.MistralAiChatModel;
import org.springframework.http.ResponseEntity;//RESPONSE korar jonno
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mistralai")//api mistralai diye request korle controller e asbe
@CrossOrigin("*")//crossorigin use korbo jate frontend theke request pathano jay
public class MistralController {

    private MistralAiChatModel chatModel; //MistralAiChatModel class er object create korbo jate chatModel er method call korte pari


    public MistralController(MistralAiChatModel chatModel)//constructor injection use kore MistralAiChatModel er object pass korbo
    {
        this.chatModel = chatModel;
    }


    //define the point. response use kora lagbe karon string url diye pass kora lagbe. thats why responseentity
    //and @PathVariable use kora lagbe
    @GetMapping("/{message}")
    public ResponseEntity<String> getResponse(@PathVariable("message") String message) {
        String response = chatModel.call(message);//chatModel er call method e message pass korbo jeta user input hisebe dibe
        return ResponseEntity.ok(response);//ResponseEntity er ok method use kore response return korbo karon response ok hobe
    }
}
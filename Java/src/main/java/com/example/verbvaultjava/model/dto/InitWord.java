package com.example.verbvaultjava.model.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class InitWord {
    private String foreign;
    private String translate;
}

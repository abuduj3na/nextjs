"use client"
import React from "react";

export default function Blog({ params }){
  console.log(params);
  return <div>Blog page: {params.blog}</div>
}
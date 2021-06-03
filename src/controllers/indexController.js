import React from 'react';
import express from 'express';


export function indexController(req, res) {
  const props = {
    name: 'John'
  };
  res.render('index.jsx', props);
}
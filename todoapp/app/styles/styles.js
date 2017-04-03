import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  newTaskButton: {
    backgroundColor: '#2980b9',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  newText: {
    color: 'white',
    fontWeight: 'bold',
  },

  settings: {
    alignSelf: 'flex-end',
    paddingTop: 20,
    width: 60,
    color: '#808080',
    marginRight: 10,
  },

  form: {
    flex: 1,
    paddingTop: 20,
    margin: 40,
  },

  buttonText: {
    backgroundColor: "#2980b9",
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },

  deleteTaskButton: {
    backgroundColor: '#e74c3c',
    marginLeft: 30,
    marginRight: 30,
    padding: 6,
  },

  taskItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  todoTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    fontSize: 20
  },

  remove: {
   flex: 1,
 },

  removeText: {
    alignSelf: 'center',
    color: 'white',
  },

  delete: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonDeleteAll: {
    height: 30,
  },

  buttonTextDelete: {
    backgroundColor: '#e74c3c',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },

  retour: {
    marginLeft: 10,
    paddingTop: 25,
    width: 50,
  },

  retourText: {
    color: '#808080',
  }

});

import * as hapi from "hapi";

export default [
  {
    method: "GET",
    path: "/",
    handler: (request: hapi.Request, h: hapi.ResponseToolkit) => {
      return "All the notes will appear here";
    },
    config: {
      description: "Gets all the notes available",
    },
  },
  {
    method: "POST",
    path: "/note",
    handler: (request: hapi.Request, h: hapi.ResponseToolkit) => {
      return "New note";
    },
    config: {
      description: "Adds a new note",
    },
  },
  {
    method: "GET",
    path: "/note/{slug}",
    handler: (request: hapi.Request, h: hapi.ResponseToolkit) => {
      return "This is a note";
    },
    config: {
      description: "Gets the content of a note",
    },
  },
  {
    method: "PUT",
    path: "/note/{slug}",
    handler: (request: hapi.Request, h: hapi.ResponseToolkit) => {
      return "Edit a note";
    },
    config: {
      description: "Updates the selected note",
    },
  },
  {
    method: "DELETE",
    path: "/note/{slug}",
    handler: (request: hapi.Request, h: hapi.ResponseToolkit) => {
      return "This note no longer exists";
    },
    config: {
      description: "Deletes the selected note",
    },
  },
];

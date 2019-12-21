import express from "express";
import noteService from "../services/NoteService";
export default class NoteController {
  constructor() {
    this.router = express
      .Router()
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  // async getAll(req, res, next) {
  //   try {
  //     let data = await noteService.getAll();
  //     return res.send(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  // async getById(req, res, next) {
  //   try {
  //     let data = await noteService.getById(req.params.id);
  //     return res.send(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  async create(req, res, next) {
    try {
      let data = await noteService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await noteService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await noteService.delete(req.params.id);
      return res.send("Successfully Deleted");
    } catch (error) {
      next(error);
    }
  }
}

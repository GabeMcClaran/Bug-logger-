import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getAll() {
    return await _repository.find({});
  }

  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }

  async getNotesByBugId(BugId) {
    return await _repository.find({ BugId });
  }

  async create(rawData) {
    return await _repository.create(rawData);
  }
  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async delete(id) {
    let data = await _repository.findOneAndRemove({ _id: id });
    if (!data) {
      throw new ApiError("invalid ID", 400);
    }
  }
}

const noteService = new NoteService();
export default noteService;

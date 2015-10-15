import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.storeChanged = this.storeChanged.bind(this);
    this.state = NoteStore.getState();
  }
  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }
  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }
  storeChanged(state) {
    this.setState(state);
  }
  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={notes} onEdit={this.editNote} onDelete={this.deleteNote} />
      </div>
    );
  }
  addNote() {
    // this.setState({
    //   notes: this.state.notes.concat([{
    //     id: uuid.v4(),
    //     task: 'New task'
    //   }])
    // });
    NoteActions.create({task: 'New task'});
  }
  editNote(id, task) {
    // let notes = this.state.notes;
    // const noteIndex = this.findNote(id);

    // if (noteIndex < 0) {
    //   return;
    // }

    // notes[noteIndex].task = task;

    // this.setState({notes});
    NoteActions.update({id, task});
  }
  findNote(id) {
    const notes = this.state.notes;
    const noteIndex = notes.findIndex((note) => note.id == id);

    if(noteIndex < 0) {
      console.warn('Failed to find note', notes, id);
    }

    return noteIndex;
  }
  deleteNote(id) {
    // const notes = this.state.notes;
    // const noteIndex = this.findNote(id);

    // if(noteIndex < 0) {
    //   return;
    // }
    // this.setState({
    //   notes: notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1))
    // });
  NoteActions.delete(id);
  }
}








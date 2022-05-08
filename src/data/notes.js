var idNote = () => {
  var notes = [];
  var octave = 4;
  const c = 12;
  for (let index = 1; index < 9; index++) {
    notes.push(
      { id: 0 + c * octave * index, note: "C", octave: octave },
      { id: 1 + c * octave * index, note: "C#", octave: octave },
      { id: 2 + c * octave * index, note: "D", octave: octave },
      { id: 3 + c * octave * index, note: "D#", octave: octave },
      { id: 4 + c * octave * index, note: "E", octave: octave },
      { id: 5 + c * octave * index, note: "F", octave: octave },
      { id: 6 + c * octave * index, note: "F#", octave: octave },
      { id: 7 + c * octave * index, note: "G", octave: octave },
      { id: 8 + c * octave * index, note: "G#", octave: octave },
      { id: 9 + c * octave * index, note: "A", octave: octave },
      { id: 10 + c * octave * index, note: "A#", octave: octave },
      { id: 11 + c * octave * index, note: "B", octave: octave }
    );
  }
  return notes;
};
export default idNote();

var Note = () => {
  var notes = [];
  for (let index = 1; index < 4; index++) {
    notes.push(
      { id: 0 + 12 * index, note: "C" },
      { id: 1 + 12 * index, note: "C#" },
      { id: 2 + 12 * index, note: "D" },
      { id: 3 + 12 * index, note: "D#" },
      { id: 4 + 12 * index, note: "E" },
      { id: 5 + 12 * index, note: "F" },
      { id: 6 + 12 * index, note: "F#" },
      { id: 7 + 12 * index, note: "G" },
      { id: 8 + 12 * index, note: "G#" },
      { id: 9 + 12 * index, note: "A" },
      { id: 10 + 12 * index, note: "A#" },
      { id: 11 + 12 * index, note: "B" }
    );
  }

  return notes;
};

export default Note();

// var idNote = () => {
//   var notes = [];
//   var octave = 4;
//   const c = 12;
//   for (let index = 1; index < 9; index++) {
//     notes.push(
//       { id: 0 + c * octave * index, note: "C", octave: octave },
//       { id: 1 + c * octave * index, note: "C#", octave: octave },
//       { id: 2 + c * octave * index, note: "D", octave: octave },
//       { id: 3 + c * octave * index, note: "D#", octave: octave },
//       { id: 4 + c * octave * index, note: "E", octave: octave },
//       { id: 5 + c * octave * index, note: "F", octave: octave },
//       { id: 6 + c * octave * index, note: "F#", octave: octave },
//       { id: 7 + c * octave * index, note: "G", octave: octave },
//       { id: 8 + c * octave * index, note: "G#", octave: octave },
//       { id: 9 + c * octave * index, note: "A", octave: octave },
//       { id: 10 + c * octave * index, note: "A#", octave: octave },
//       { id: 11 + c * octave * index, note: "B", octave: octave }
//     );
//   }
//   return notes;
// };
// export default idNote();

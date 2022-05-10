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

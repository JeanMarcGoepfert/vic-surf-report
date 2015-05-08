class TextFormat {
  humanize(text) {
    return text.replace(/\-/g, ' ');
  }
}

export default new TextFormat();

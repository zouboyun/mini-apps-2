class Bowling {
  constructor() {
    // score(0 - 10), status(normal, strike, spare)
    this.frames = [];
    for (let i = 0; i < 12; i += 1) {
      this.frames.push({
        first: 0,
        second: 0,
        bonus: 0,
        status: 'normal',
      });
    }
  }

  getFrame() {
    return this.frames;
  }

  getScore() {
    return this.frames.map(item => {
      return item.first + item.second + item.bonus;
    });
  }

  addBonus() {
    for (let i = 0; i < 10; i += 1) {
      if (this.frames[i].status === 'strike') {
        if (this.frames[i + 1].status === 'strike') {
          this.frames[i].bonus = 10;
          this.frames[i].bonus += this.frames[i + 2].first;
        } else {
          this.frames[i].bonus = this.frames[i + 1].first;
          this.frames[i].bonus += this.frames[i + 1].second;
        }
      } else if (this.frames[i].status === 'spare') {
        this.frames[i].bonus = this.frames[i + 1].first;
      }
    }
  }

  setScore(frameNum, throwNum, score) {
    if (score === 10 && throwNum === 1) {
      // strike case
      this.frames[frameNum].first = 10;
      this.frames[frameNum].status = 'strike';
    } else if (score < 10 && throwNum === 1) {
      this.frames[frameNum].first = score;
    } else if (throwNum === 2) {
      if (this.frames[frameNum].status !== 'strike') {
        const currentScore = this.frames[frameNum].first;
        if (currentScore + score === 10) {
          // spare case
          this.frames[frameNum].second = score;
          this.frames[frameNum].status = 'spare';
        } else if (currentScore + score > 10) {
          // spare case
          score = 10 - currentScore;
          this.frames[frameNum].second = score;
          this.frames[frameNum].status = 'spare';
        } else {
          this.frames[frameNum].second = score;
        }
      }
    }
  }
}

export default Bowling;
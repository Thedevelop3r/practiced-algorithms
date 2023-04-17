function likes(peopleNames) {
  var feels = new FeelingsParty('like', 'this');
  for (var name in peopleNames) feels.addFeeler(new Person(peopleNames[name]));
  return feels.shareTheseFeelings();
}

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

function FeelingsParty(emotion, target) {
  this.emotionalContext = emotion;
  this.emotionalSubject = target;
  this.peopleFeelingThisWay = [];
  this.numPeopleFeelingThisWay = 0;
}

FeelingsParty.prototype.getEmotionalContext = function () {
  return this.type;
};

FeelingsParty.prototype.addFeeler = function (person) {
  this.numPeopleFeelingThisWay++;
  this.peopleFeelingThisWay.push(person);
};

FeelingsParty.prototype.shareTheseFeelings = function () {
  this.findTheRightWords();
  if (this.numPeopleFeelingThisWay == 0)
    return 'no one ' + this.emotionalContext + ' ' + this.emotionalSubject;
  if (this.numPeopleFeelingThisWay == 1)
    return (
      '' + this.peopleFeelingThisWay[0].getName() + ' ' + this.emotionalContext + ' ' + this.emotionalSubject
    );
  if (this.numPeopleFeelingThisWay == 2)
    return (
      '' +
      this.peopleFeelingThisWay[0].getName() +
      ' and ' +
      this.peopleFeelingThisWay[1].getName() +
      ' ' +
      this.emotionalContext +
      ' ' +
      this.emotionalSubject
    );
  if (this.numPeopleFeelingThisWay == 3)
    return (
      '' +
      this.peopleFeelingThisWay[0].getName() +
      ', ' +
      this.peopleFeelingThisWay[1].getName() +
      ' and ' +
      this.peopleFeelingThisWay[2].getName() +
      ' ' +
      this.emotionalContext +
      ' ' +
      this.emotionalSubject
    );
  return (
    '' +
    this.peopleFeelingThisWay[0].getName() +
    ', ' +
    this.peopleFeelingThisWay[1].getName() +
    ' and ' +
    (this.numPeopleFeelingThisWay - 2) +
    ' others ' +
    this.emotionalContext +
    ' ' +
    this.emotionalSubject
  );
};

FeelingsParty.prototype.findTheRightWords = function () {
  if (this.numPeopleFeelingThisWay == 0 || this.numPeopleFeelingThisWay == 1) this.emotionalContext += 's';
};

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComent(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4
  }
}

function editComent(id, text) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  }
}

function removeComment (id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

function thumbUpComment (id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  }
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  }
}
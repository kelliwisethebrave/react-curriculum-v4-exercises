import { useContext, useState, useEffect } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const [newOptionText, setNewOptionText] = useState('');
  const [workingOptions, setWorkingOptions] = useState(question.options);
  const { state, dispatch } = useContext(SurveyContext);
  const isEditing = state.ui.editingQuestionId === question.id;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here

  useEffect(() => {
    setWorkingOptions(question.options);
  }, [question.options]);

  const handleEdit = () => {
    console.log('TODO: Implement edit functionality');
    // Hint: Use SET_EDITING_QUESTION action
    if (isEditing) {
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: null },
      });
    } else {
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: question.id },
      });
    }
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    console.log('TODO: Implement save functionality');
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
    console.log({
      questionId: question.id,
      newText: workingText,
    });
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: { questionId: question.id, newText: workingText },
    });
    dispatch({ type: 'SET_EDITING_QUESTION', payload: { questionId: null } });
  };

  const handleSaveOption = (index) => {
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex: index,
        newText: workingOptions[index],
      },
    });
  };

  // TODO: Students will add delete functionality here

  const handleDelete = () => {
    //console.log('TODO: Implement delete functionality');
    const doYouWantToDelete = window.confirm(
      'Are you sure you want to delete this question?'
    );
    if (!doYouWantToDelete) return;

    dispatch({ type: 'DELETE_QUESTION', payload: { questionId: question.id } });
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      <div className={styles['question-content']}>
        {isEditing ? (
          <div>
            <input
              value={workingText}
              onChange={(event) => setWorkingText(event.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button
              onClick={() =>
                dispatch({
                  type: 'SET_EDITING_QUESTION',
                  payload: { questionId: null },
                })
              }
            >
              Cancel
            </button>
          </div>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {isEditing ? (
                  <div>
                    <input
                      value={workingOptions[index]}
                      onChange={(event) => {
                        const updatedOptions = [...workingOptions];
                        updatedOptions[index] = event.target.value;
                        setWorkingOptions(updatedOptions);
                      }}
                    />
                    <button onClick={() => handleSaveOption(index)}>
                      Save
                    </button>
                    <button onClick={() => setWorkingOptions(question.options)}>
                      Cancel
                    </button>
                    <button
                      disabled={question.options.length <= 2}
                      onClick={() =>
                        dispatch({
                          type: 'DELETE_OPTION_FROM_QUESTION',
                          payload: {
                            questionId: question.id,
                            optionIndex: index,
                          },
                        })
                      }
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <span className={styles['option-text']}>{option}</span>
                )}
              </li>
            ))}

            {isEditing && (
              <li>
                <input
                  value={newOptionText}
                  onChange={(event) => setNewOptionText(event.target.value)}
                ></input>
                <button
                  onClick={() =>
                    dispatch({
                      type: 'ADD_OPTION_TO_QUESTION',
                      payload: {
                        questionId: question.id,
                        optionText: newOptionText,
                      },
                    })
                  }
                >
                  Add Option
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

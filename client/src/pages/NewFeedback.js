import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoBack from '../reusable/GoBackLink';
import SuggestionForm from '../features/suggestions/SuggestionForm';

import { getCurrentUser } from '../features/users/usersSlice';
import { suggestionAdded } from '../features/suggestions/suggestionsSlice';

// styled components
import { FormPageWrapper } from '../features/suggestions/SuggestionsStyles';

const NewFeedback = () => {
    const currentUser = useSelector(state => getCurrentUser(state));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addNewSuggestion = ({title, category, description}) => {
        dispatch(suggestionAdded(
            title,
            category,
            description,
            currentUser.id
        ));

        navigate('/');
    }

    return (
        <FormPageWrapper>
            <header>
                <GoBack darkText={true}/>
            </header>
            <SuggestionForm 
                heading='Create New Feedback'
                title=''
                category='feature'
                description=''
                submitBtnText='Add Feedback'
                onFormSubmitted={addNewSuggestion}
                goBack='/productRequests'
            />
        </FormPageWrapper>
    )
}

export default NewFeedback;

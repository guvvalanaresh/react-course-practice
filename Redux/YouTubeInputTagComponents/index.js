import { createStore } from './redux.js';

/** 
 * Redux state:
 * {
 *      tags: [ {tagId: 2773, text:"javascript"} ]
 * }
 */

const primaryKeyBuilder = () => {
    var key = 0;
    return () => key++;
};

const pkInstance = primaryKeyBuilder();

const reducer = (state = { tags: [] }, action) => {
    if(action.type === "add") {
        // adds a new tag into state
        // action payload: { tagId: 12, text:'javascript'}
        return { tags: [...state.tags, action.payload] };
    }
    if(action.type === "remove") {
        // removes the tag from state
        const tagId = action.payload;
        const newTags = state.tags.filter((tag) => tag.tagId !== tagId);
        return { tags: newTags };
    }
    return state;
};

const store = createStore(reducer);

/** 
 * HTML elements interaction
 */

const tagInput = document.getElementById("tag-input");
const tagContainer = document.getElementById("tags");

tagInput.addEventListener("keyup", (e) => {
    const tagValue = tagInput.value.trim();
    if((e.key === "Enter" || e.key === ",") && tagValue) {
        store.dispatch({
            type: "add",
            payload: { tagId: pkInstance(), text: tagValue },
        });
        tagInput.value = '';
    }
});

const createElement = (tag) => {
    /**
     * <div class="tag">
                <span>JavaScript</span>
                <span class="material-symbols-outlined">close</span>
            </div>
     */

    const tagContainer = document.createElement("div");
    tagContainer.classList.add('tag');
    const text = document.createElement("span");
    text.innerHTML = tag.text;
    const closeIcon = document.createElement("span");
    closeIcon.classList.add("material-symbols-outlined", "close-btn");
    closeIcon.innerHTML = "close";

    closeIcon.addEventListener("click", (e) => {
        store.dispatch({
            type: "remove",
            payload: tag.tagId,
        });
    });

    tagContainer.append(text, closeIcon);
    return tagContainer;
}

const renderTags = () => {
    tagContainer.innerHTML = '';
    const { tags } = store.getState();
    tags.forEach((tag) => {
        const tagElement = createElement(tag);
        tagContainer.appendChild(tagElement);
    });
}

store.subscribe(renderTags);
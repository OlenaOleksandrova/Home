// <!-- // Створи перелік справ.
    import { onTaskFormSubmit } from "./handlers";
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки. -->

import { refs } from "./refs";
import { onTaskFormSubmit } from "./handlers";

refs.form.addEventListener('submit', onTaskFormSubmit);
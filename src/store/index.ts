import {createPinia} from "pinia";
import {App} from "vue";

const pinia = createPinia();

export default function (app: App) {
    app.use(pinia);
}

import { createEffect, createSignal } from "solid-js";
import { useLocation, useNavigate } from "solid-start";
import styles from "./SearchBox.module.scss";
export default function Input(props) {
  const [value, setValue] = createSignal("");
  const navigate = useNavigate();
  const location = useLocation();
  createEffect(() => {
    console.log("value", value());
    if (value().length) {
      console.log(document.activeElement);
      navigate(`${location.pathname}?q=${value()}`);
    }
  });

  return (
    <>
      <div class={styles.form}>
        <form autocomplete="off">
          <label class="visuallyhidden" for="search">
            Search
          </label>

          <div class={styles.field}>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search for a movie, tv show or person..."
              // keyup="goToRoute"
              // blur="unFocus"
              oninput={e => setValue(e.currentTarget.value)}
              value={value()}
            />
            <button v-if="showButton" type="button" aria-label="Close" click="goBack">
              {/* <CrossIcon /> */}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

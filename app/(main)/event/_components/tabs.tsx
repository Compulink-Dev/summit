"use client";
import { useState } from "react";
import FirstTab from "./firsttab";
import SecondTab from "./secondtab";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    return (
        <div className="container mx-auto max-w-7xl my-8 flex justify-center items-center px-4">
            <div className="container2 border border-purple-400">
                <div className="bloc-tabs">
                    <button
                        className={
                            toggleState === 1 ? "tabs active-tabs font-bold text-purple-500" : "tabs text-purple-500"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        First Day
                    </button>
                    <button
                        className={
                            toggleState === 2 ? "tabs active-tabs font-bold text-purple-500" : "tabs text-purple-500"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        Second Day
                    </button>
                    {/* <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Tab 3
          </button> */}
                </div>

                <div className="content-tabs">
                    <div
                        className={
                            toggleState === 1 ? "content  active-content" : "content"
                        }
                    >
                        <FirstTab />
                    </div>

                    <div
                        className={
                            toggleState === 2 ? "content  active-content" : "content"
                        }
                    >
                        <SecondTab />
                    </div>

                    {/* <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div> */}
                </div>
            </div>
        </div>
    );
}

export default Tabs;

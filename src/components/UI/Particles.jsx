import React from "react";
import Particles from "react-particles-js";

const ParticlesComponent = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "90vh",
                position: "absolute",
            }}
        >
            <Particles
                height={window.outerHeight}
                params={{
                    particles: {
                        number: {
                            value: 150,
                            density: {
                                enable: true,
                            },
                        },
                        color: {
                            value: ["#28a745", "#595A5D", "#550103"],
                        },
                        size: {
                            value: 8,
                            random: true,
                        },
                        move: {
                            direction: "bottom",
                            out_mode: "out",
                        },
                        line_linked: {
                            enable: false,
                        },
                    },
                    interactivity: {
                        events: {
                            onclick: {
                                enable: true,
                                //mode: "remove",
                            },
                        },
                        modes: {
                            remove: {
                                particles_nb: 5,
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default ParticlesComponent;

// @ts-nocheck
import { useRef, forwardRef, useImperativeHandle } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import * as THREE from "three";

extend({ TrackballControls });

const ALT_KEY = 18;
const CTRL_KEY = 17;
const CMD_KEY = 91;

const Controls = ({}, ref) => {
    const controls = useRef();
    const { camera, gl } = useThree();

    useFrame(() => {
        controls.current.update();
    });

    useImperativeHandle(ref, () => ({
        resetCamera: () => {
            controls.current.target.set(0, 0, 0);
            camera.position.set(0, 0, 80);

            camera.up.set(
                controls.current.up0.x,
                controls.current.up0.y,
                controls.current.up0.z
            );
        },
    }));

    return (
        <trackballControls
            ref={controls}
            args={[camera, gl.domElement]}
            dynamicDampingFactor={0.1}
            keys={[ALT_KEY, CTRL_KEY, CMD_KEY]}
            mouseButtons={{
                LEFT: THREE.MOUSE.ROTATE,
                // LEFT: THREE.MOUSE.PAN,
                // MIDDLE: THREE.MOUSE.ZOOM,
                // RIGHT: THREE.MOUSE.ROTATE,
            }}
            noZoom={true}
            noPan={true}
        />
    );
};

export default forwardRef(Controls);

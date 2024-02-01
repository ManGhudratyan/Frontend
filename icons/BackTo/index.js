import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackTo(props) {
  return (
    <Svg
      width="60px"
      height="40px"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="iconify iconify--noto"
      {...props}
    >
      <Path
        d="M116 4H12c-4.4 0-8 3.6-8 8v104c0 4.4 3.6 8 8 8h104c4.4 0 8-3.6 8-8V12c0-4.4-3.6-8-8-8z"
        fill="#9F6D46"
      />
      <Path
        d="M109.7 4H11.5C7.4 4 4 7.4 4 11.5v97.9c0 4.2 3.4 7.5 7.5 7.5h98.1c4.2 0 7.5-3.4 7.5-7.5V11.5c.2-4.1-3.3-7.5-7.4-7.5z"
        fill="#9F6D46"
      />
      <Path
        d="M47.4 91l-24-24c-1.8-1.6-1.8-4.4 0-6l24-24c2.6-2.3 6.6-.4 6.6 3v14c0 1.1.9 2 2 2h46c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4H56c-1.1 0-2 .9-2 2v14c0 3.4-4 5.3-6.6 3z"
        fill="#fafafa"
      />
      <Path
        d="M39.7 12.9c0-2.3-1.6-3-10.8-2.7-7.7.3-11.5 1.2-13.8 4s-2.9 8.5-3 15.3c0 4.8 0 9.3 2.5 9.3 3.4 0 3.4-7.9 6.2-12.3 5.4-8.7 18.9-10.6 18.9-13.6z"
        opacity={0.5}
        fill="#b4e1ed"
      />
    </Svg>
  )
}

export default BackTo;

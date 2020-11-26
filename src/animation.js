export const container_neg_x = {
  hidden: { x: -500 },
  show: {
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const container_pos_x = {
  hidden: { x: 500 },
  show: {
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 }
  }
};

// export const pageAnimation = {
//   hidden: {
//     opacity: 0,
//     y: 500
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.9,
//       when: "beforeChildren",
//       staggerChildren: 0.25
//     }
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       duration: 0.9
//     }
//   }
// };

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

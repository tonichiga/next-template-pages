export const SvgMaker = (name, classname, callback = undefined) => {
  return (
    <svg
      className={classname}
      onClick={() => (callback ? callback() : null)}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <use
        href={`/images/sprite.svg#${name}`}
        // xlink:href={`/images/sprite.svg#${name}`}
        xlinkHref={`/images/sprite.svg#${name}`}
      ></use>
    </svg>
  );
};

const BackNavigation = ({
  //BUTTON PROPS
  title,
  topButton,
  leftButton,
  rightButton,
  bottomButton,
  //ACTION PROPS
  topAction,
  leftAction,
  rightAction,
  bottomAction,
  //INPUT PROPS
  inputProps,
  tod,
  //DISABLED
  block,
  classButton,
  position,
}) => {
  return (
    <div
      className={`w-full fixed ${bottomButton ? "h-32" : "h-24"} ${
        position ? position : "bottom-0"
      }  z-20 bg-custom-bg bg-opacity-70 backdrop-blur-2xl border-t border-custom-gray`}
    >
      <div className="w-full px-4 py-4 space-y-3">
        <div className="flex justify-between items-center w-full">
          <div className="w-3/12 flex items-center">
            <button onClick={leftAction}>{leftButton}</button>
          </div>
          <div className="w-full flex items-center justify-center text-lg font-bold text-custom-black">
            {title}
          </div>
          <div onClick={rightAction} className="w-3/12 flex items-center">
            {rightButton}
          </div>
        </div>
        {bottomButton && (
          <div>
            <button
              disabled={block}
              className={`${classButton} w-full h-12 rounded-full text-s font-bold`}
              onClick={bottomAction}
            >
              {bottomButton}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackNavigation;

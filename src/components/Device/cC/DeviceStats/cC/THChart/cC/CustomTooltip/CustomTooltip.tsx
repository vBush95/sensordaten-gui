import TooltipContainerSC from "./StyledComponents";

const CustomTooltip = ({ point }: any) => {
  //console.log(point);
  return (
    <TooltipContainerSC>
      <div>Temperatur: {point.data.x} °C</div>
      <div>Luftfeuchtigkeit: {point.data.y} %</div>
    </TooltipContainerSC>
  );
};

export default CustomTooltip;

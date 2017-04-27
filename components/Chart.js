import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = ({data, color, avg, units}) => {
  return (
    <div>
      <Sparklines data={data} limit={5} width={180} height={120} margin={5}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      {avg}{units}
    </div>
  )
}

export default Chart;

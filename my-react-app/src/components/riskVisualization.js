import { useState, useEffect } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { useRiskPrediction } from '../context/RiskPredictionContext';

export default function RiskViz({ randomFactors }) {
  const [active, setActive] = useState(null);
  const [pieData, setPieData] = useState([]);
  const width = 400;
  const half = width / 2;

  useEffect(() => {
    if (randomFactors && randomFactors.length >= 5) {
        // ... existing logic to generate pieData

    // Generate initial random values for the first 5 factors
    let rawValues = randomFactors.slice(0, 5).map(() => Math.random() * (94) + 7);

    // Calculate the sum of all raw values
    let sum = rawValues.reduce((acc, val) => acc + val, 0);

    // Normalize the values so that their sum is less than 1
    let normalizedValues = rawValues.map(val => (val / sum) * 0.8); // 80% of the total

    // Add the "Other" factor with the remaining percentage
    normalizedValues.push(1 - normalizedValues.reduce((acc, val) => acc + val, 0));

    // Convert them into pieData
    const newData = normalizedValues.map((percent, index) => ({
      label: index < 5 ? randomFactors[index].label : "Other",
      percent,
      color: `hsl(${(index / normalizedValues.length) * 360}, 70%, 60%)`,
    }));
    setPieData(newData);
    }
  }, [randomFactors]);

  const { riskPrediction } = useRiskPrediction();

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={pieData}
            pieValue={(data) => data.percent}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.label === data.label ? 90 : 35;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.label}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                {`${Math.round(active.percent * 100)}%`}
              </Text>

              <Text textAnchor="middle" fill={active.color} fontSize={25} dy={20} fontWeight="bold">
                {active.label}
              </Text>
            </>
          ) : (
            <Text textAnchor="middle" fill="white" fontSize={100} dy={40}>
              {riskPrediction + "%"}
            </Text>
          )}
        </Group>
      </svg>
    </main>
  );
}

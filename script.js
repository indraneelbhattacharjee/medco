   const data = [
        { "Reporter_family": "AmerisourceBergen Drug", "total_dosage_unit": 685262870, "total_mme": 5978893756.384775, "total_records": 1093350 },
        { "Reporter_family": "McKesson Corporation", "total_dosage_unit": 538314600, "total_mme": 5492723802.935328, "total_records": 1363764 },
        { "Reporter_family": "Cardinal Health", "total_dosage_unit": 250756855, "total_mme": 3172409146.927347, "total_records": 637898 },
        { "Reporter_family": "CVS", "total_dosage_unit": 236040800, "total_mme": 1014562011.5999937, "total_records": 337603 },
        { "Reporter_family": "Kaiser Permanente", "total_dosage_unit": 198527450, "total_mme": 661112513.8100107, "total_records": 136855 },
        { "Reporter_family": "H. D. Smith", "total_dosage_unit": 165608210, "total_mme": 1910598761.5696719, "total_records": 354418 },
        { "Reporter_family": "Walgreen Co", "total_dosage_unit": 131465310, "total_mme": 955042805.4898849, "total_records": 296182 },
        { "Reporter_family": "Thrifty Payless Inc", "total_dosage_unit": 11246240, "total_mme": 476652276.0300036, "total_records": 194331 },
        { "Reporter_family": "Valley Wholesale Drug Co", "total_dosage_unit": 75272360, "total_mme": 704291474.2452638, "total_records": 150476 },
        { "Reporter_family": "Wal-Mart", "total_dosage_unit": 41514500, "total_mme": 240026303.38477382, "total_records": 152790 },
        { "Reporter_family": "CVS Pharmacy Inc", "total_dosage_unit": 16050410, "total_mme": 61124697.639829, "total_records": 20457 },
        { "Reporter_family": "Smith Drug Company", "total_dosage_unit": 1450000, "total_mme": 10367659.413322, "total_records": 2128 },
        { "Reporter_family": "Kroger", "total_dosage_unit": 10233600, "total_mme": 48242401.5176695, "total_records": 12283 },
        { "Reporter_family": "Rite Aid", "total_dosage_unit": 93670450, "total_mme": 330102895.632566, "total_records": 69928 },
        { "Reporter_family": "H.E. Butt", "total_dosage_unit": 15625650, "total_mme": 75520516.3824356, "total_records": 19488 },
        { "Reporter_family": "Dierbergs Markets", "total_dosage_unit": 2556400, "total_mme": 12789185.1689345, "total_records": 2952 },
        { "Reporter_family": "Meijer", "total_dosage_unit": 10023500, "total_mme": 57683117.474637, "total_records": 12076 },
        { "Reporter_family": "Albertsons", "total_dosage_unit": 30570640, "total_mme": 157371117.5096, "total_records": 29392 },
        { "Reporter_family": "Sam's East", "total_dosage_unit": 5836570, "total_mme": 31920819.9950082, "total_records": 6373 },
        { "Reporter_family": "United Supermarkets", "total_dosage_unit": 2935300, "total_mme": 14880552.0537545, "total_records": 2926 },
        { "Reporter_family": "Safeway", "total_dosage_unit": 22177620, "total_mme": 123707379.681872, "total_records": 20999 },
        { "Reporter_family": "Publix", "total_dosage_unit": 24707890, "total_mme": 123728195.141562, "total_records": 26020 },
        { "Reporter_family": "CVS Pharmacy LLC", "total_dosage_unit": 34755210, "total_mme": 107674211.436986, "total_records": 26796 },
        { "Reporter_family": "Fred's Pharmacy", "total_dosage_unit": 3266480, "total_mme": 18962385.121028, "total_records": 3368 },
        { "Reporter_family": "Giant Eagle", "total_dosage_unit": 19322360, "total_mme": 90220150.2698634, "total_records": 22436 },
        { "Reporter_family": "Cameron Drugs", "total_dosage_unit": 349200, "total_mme": 2082292.26499365, "total_records": 573 },
        { "Reporter_family": "Costco", "total_dosage_unit": 3321600, "total_mme": 13815118.116621, "total_records": 3163 },
        { "Reporter_family": "Whitesell & Co.", "total_dosage_unit": 40850, "total_mme": 289228.5255745, "total_records": 64 },
        { "Reporter_family": "Bergdoll Drug", "total_dosage_unit": 100000, "total_mme": 512125.48255, "total_records": 156 },
        { "Reporter_family": "GENCO I", "total_dosage_unit": 0, "total_mme": 0, "total_records": 4 }
    ];

    const scatterWithTrendSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "A scatter plot with a trend line showing total MME vs total records.",
        "data": { "values": data },
        "layer": [
            {
                "mark": "point",
                "encoding": {
                    "x": { "field": "total_records", "type": "quantitative" },
                    "y": { "field": "total_mme", "type": "quantitative" },
                    "tooltip": [
                        { "field": "Reporter_family", "type": "nominal" },
                        { "field": "total_mme", "type": "quantitative" },
                        { "field": "total_records", "type": "quantitative" }
                    ]
                }
            },
            {
                "mark": { "type": "line", "interpolate": "linear" },
                "transform": [
                    {
                        "aggregate": [
                            { "op": "mean", "field": "total_mme", "as": "aggregated_value" }
                        ],
                        "groupby": ["total_records"]
                    }
                ],
                "encoding": {
                    "x": { "field": "total_records", "type": "quantitative" },
                    "y": { "field": "aggregated_value", "type": "quantitative" }
                }
            }
        ],
        "width": 800,
        "height": 600
    };
    
        

    /*const lineSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "A line chart showing total MME over total records.",
        "data": { "values": data },
        "mark": "line",
        "encoding": {
            "x": { "field": "total_records", "type": "quantitative" },
            "y": { "field": "total_mme", "type": "quantitative" },
            "color": { "field": "Reporter_family", "type": "nominal", "scale": { "scheme": "category10" }},
            "tooltip": [
                { "field": "Reporter_family", "type": "nominal" },
                { "field": "total_mme", "type": "quantitative" },
                { "field": "total_records", "type": "quantitative" }
            ]
        },
        "width": 800,
        "height": 700,
        "selection": {
        "grid": {
            "type": "interval", "bind": "scales"
        }
    }
    };*/

const scatterSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A scatter plot showing total dosage units vs total MME.",
    "data": { "values": data },
    "mark": "point",
    "encoding": {
        "x": { "field": "total_dosage_unit", "type": "quantitative" },
        "y": { "field": "total_mme", "type": "quantitative" },
        "tooltip": [{ "field": "Reporter_family", "type": "nominal" }]
    },
    "width": "container",
    "height": 500,
    "signals": [
        { "name": "zoomLevel", "init": 1 }
    ],
    "transform": [
        { "type": "zoom", "zoomLevel": { "signal": "zoomLevel" } }
    ],
    "selection": {
        "grid": {
            "type": "interval", "bind": "scales"
        }
    }
};

const barSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A bar chart showing total dosage units per reporter family.",
    "data": { "values": data },
    "mark": "bar",
    "encoding": {
        "x": { "field": "Reporter_family", "type": "nominal", "sort": "-y" },
        "y": { "field": "total_dosage_unit", "type": "quantitative" },
        "tooltip": [
            { "field": "Reporter_family", "type": "nominal" },
            { "field": "total_dosage_unit", "type": "quantitative" }
        ]
    },
    "width": "container",
    "height": 500
};

const pieSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A pie chart showing the distribution of total dosage units by reporter family.",
    "data": { "values": data },
    "mark": { "type": "arc", "tooltip": true },
    "encoding": {
        "theta": { "field": "total_dosage_unit", "type": "quantitative" },
        "color": { "field": "Reporter_family", "type": "nominal" },
        "tooltip": [
            { "field": "Reporter_family", "type": "nominal" },
            { "field": "total_dosage_unit", "type": "quantitative" }
        ]
    },
    "width": 500,
    "height": 500
};
const stackedBarSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A stacked bar chart showing total dosage units by reporter family and total MME.",
    "data": { "values": data },
    "mark": "bar",
    "encoding": {
        "x": { "field": "Reporter_family", "type": "nominal", "sort": "-y" },
        "y": { "field": "total_dosage_unit", "type": "quantitative", "stack": "normalize" },
        "color": { "field": "total_mme", "type": "quantitative" },
        "tooltip": [
            { "field": "Reporter_family", "type": "nominal" },
            { "field": "total_dosage_unit", "type": "quantitative" },
            { "field": "total_mme", "type": "quantitative" }
        ]
    },
    "width": "container",
    "height": 500
};

const histogramSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A histogram showing the distribution of total MME.",
    "data": { "values": data },
    "mark": "bar",
    "encoding": {
        "x": { "field": "total_mme", "bin": true, "type": "quantitative" },
        "y": { "aggregate": "count", "type": "quantitative" },
        "color": { "field": "Reporter_family", "type": "nominal", "scale": { "scheme": "category20" } },
        "tooltip": [
            { "field": "total_mme", "bin": true, "type": "quantitative" },
            { "aggregate": "count", "type": "quantitative" }
        ]
    },
    "width": "container",
    "height": 500
};

const specs = {
    scatter: scatterSpec,
    bar: barSpec,
    pie: pieSpec,
    scatterTrend: scatterWithTrendSpec,
    stackedBar: stackedBarSpec,
    histogram: histogramSpec
};
const Questions ={
    scatter:"How does the distribution of total dosage units correlate with MME across different opioid distributors?",
    bar:"What is the distribution of total dosage units across different opioid distributors in Los Angeles?",
    pie:"How are total dosage units distributed among different opioid distributors in Los Angeles?",
    scatterTrend:"How does the trend in total MME (Morphine Milligram Equivalents) change with the number of total records reported by different opioid distributors in Los Angeles?",
    stackedBar:"What is the comparative distribution of total dosage units among different reporter families in Los Angeles?",
    histogram: "What is the distribution of the total Morphine Milligram Equivalents (MME) across different records in Los Angeles?"
}
const Descriptions ={
        scatter: "This scatter plot visualizes the relationship between total dosage units and Morphine Milligram Equivalents (MME) reported by various opioid distributors in Los Angeles. Each point represents a distributor, with the x-axis denoting dosage units and the y-axis showing MME. Interactive tooltips provide specific details for each distributor, facilitating comparison and analysis of distribution patterns. This visualization aids in identifying distributors handling higher volumes of opioids and their corresponding potency levels, offering insights into market dynamics and regulatory compliance.",
        bar:"Presented as a bar chart, this visualization showcases the distribution of total dosage units among opioid distributor families in Los Angeles. Each bar corresponds to a distributor family, sorted to highlight leaders in dosage unit contributions. Interactive features allow for hovering over bars to reveal exact quantities, enabling quick assessments of market dominance and contribution disparities. This chart serves as a straightforward tool for understanding the scale and impact of opioid distribution efforts across different families in the region.",
        pie:" The pie chart provides a concise overview of how total dosage units are distributed among opioid distributor families in Los Angeles. Each slice represents a distributor family, sized proportionally to its share of the total units. Interactive tooltips offer detailed insights into each family's contribution, aiding in understanding market share dynamics. This visualization simplifies the comparison of distribution patterns, allowing to quickly grasp the relative significance of each distributor in the local opioid market.",
        scatterTrend:"This scatter plot includes a trend line to depict trends in Morphine Milligram Equivalents (MME) relative to the number of records reported by opioid distributors in Los Angeles. Each point represents a distributor family, with the trend line indicating the general relationship between MME and reporting volume. Interactive features allow for detailed exploration via tooltips, providing insights into how reporting practices may influence opioid potency distribution. This visualization supports trend analysis and outlier detection.",
        stackedBar:"Presented as a stacked bar chart, this visualization illustrates the breakdown of total dosage units among opioid distributor families in Los Angeles, segmented by Morphine Milligram Equivalents (MME) categories. Each bar is divided into segments representing different potency levels within each family. Interactive tooltips facilitate deeper analysis by revealing specific dosage and potency details, offering insights into distribution strategies and regulatory adherence across distributor families.This chart shows how dosage units are distributed, helping to understand market trends and regulations. ",
        histogram: "The histogram shows how much Morphine Milligram Equivalents (MME) are reported by opioid distributors in Los Angeles. Each bar represents a range of MME values, with taller bars showing more records in that range. You can hover over bars for details, like how many records are in each range, helping you see where opioids are most concentrated."
    }

function updateChart() {
   
    const chartType = document.getElementById("chart-select").value;
    const filterValue = document.getElementById("filter-select").value;

    let filteredData = data;
    if (filterValue) {
        filteredData = data.filter(d => d.Reporter_family === filterValue);
    }
    const chartSpec = {...specs[chartType], data: { values: filteredData } };
    vegaEmbed('#chart', chartSpec, { actions: false });
   // document.getElementById(`${chartType}-description`).style.display = "block";
    //changes the question when the chart is updated by graph
    const Question = document.getElementById('question');
    Question.textContent = Questions[chartType];
    //changes the description when the chart is updated by graph
    const Description = document.getElementById('chart-description');
    Description.textContent = Descriptions[chartType];
    document.getElementById('zoomRange').addEventListener('input', function() {
        view.signal('zoomLevel', +this.value).run();
    });
    }

updateChart();

function showWriteUp() {
    document.getElementById("writeup-modal").style.display = "block";
}

function closeWriteUp() {
    document.getElementById("writeup-modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("writeup-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

import React, { useEffect, useState } from "react";

interface CardProps {
  title: string;
  description: string;
  date: string;
  cardType: "todo" | "inprogress" | "done";
}

export function Card(props: CardProps) {
  const [cardColor, setcardColor] = useState<"#ccc" | "#eec76b" | "#4eaaa6">(
    "#ccc"
  );

  useEffect(() => {
    const { cardType } = props;
    if (cardType === "inprogress") {
      setcardColor("#eec76b");
    }
    if (cardType === "done") {
      setcardColor("#4eaaa6");
    }
  }, [props.cardType]);

  return (
    <div
      className="rounded-md m-2 max-h-[200px] p-2 drop-shadow-lg"
      style={{
        borderTop: `solid 1px ${cardColor}`,
        borderBottom: `solid 1px ${cardColor}`,
      }}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg text-slate-900">{props.title}</h4>
        <p className="text-xs text-slate-600">{props.date}</p>
      </div>
      <div>
        <p className="text-sm text-slate-700">{props.description}</p>
      </div>
    </div>
  );
}

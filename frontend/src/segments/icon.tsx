import React from 'react';

interface IconProps {
  id: string;
  item?: {
    split: string;
    title: string;
    link: string;
  }
}

const Icon: React.FC<IconProps> = ({ id, item }: IconProps) => {
  const iD = `svgelem${id}`;
  const ttId = `ttip${id}`;
  const topText = item?.split || '';
  const bottomText = item?.title.replace(item?.split, '').trim() || '';
  const imageUrl = `${import.meta.env.VITE_APP_CLIENT_URL}/images/TIC Home Page Icons/${item?.link}`;

  const topRect = topText !== '' ? <rect width="100" height="12" fill="#fff" /> : null;
  const botRect = bottomText !== '' ? <rect y="88" width="100" height="12" fill="#fff" /> : null;

  return (
    <div id={iD} key={id}>
      <svg className="iconsquare" data-tip data-for={ttId} height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <image x="0" y="0" width="100" height="98" href={imageUrl} />
        {topRect}
        {botRect}
        <text className="txbx textload" x="50" y="8" textAnchor="middle" alignmentBaseline="middle"
              fontFamily="Verdana" fontSize="70%" fill="#443380">
          {topText}
        </text>
        <text className="txbx textload" x="50" y="94" textAnchor="middle" alignmentBaseline="middle"
              fontFamily="Verdana" fontSize="70%" fill="#443380">
          {bottomText}
        </text>
        <rect className="redrect" width="100" height="100" fill="rgba(0,0,0,0)"
              stroke="#443380" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default Icon;

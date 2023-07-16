import { nanoid } from 'nanoid';
import Star from './Star';

interface StarsProps {
  count: number,
}

const ratingCount: number[] = [1, 2, 3, 4, 5];

function Stars({ count = 0 }: StarsProps) {
  return ratingCount.includes(count) && (
    <ul className="card-body-stars u-clearfix">
      <li className="card-body-star">
      {
        [...new Array<number>(count)].map(() => (
          <Star key={nanoid()} />
        ))
      }
      </li>
    </ul>
  );
}

export default Stars;

import './VoteCircle.css';

function VoteCircle({ voteAverage, width = 80 }: any) {
    return (
        <div className='circle-wrapper'>
            <div style={{ width: `${width}px`, height: `${width}px`}} className="rating-circle">
                <div style={{ width: `${width - 8}px`, height: `${width - 8}px`, fontSize: `${width / 4}px`}} className="rating-border">
                    {Math.round(voteAverage * 10)}%
                </div>
            </div>
        </div>
    );
}

export default VoteCircle;

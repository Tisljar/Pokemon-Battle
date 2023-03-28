import { useEffect, useRef } from 'react';
import './index.css';

const Logs = ({ logs }: any) => {
    const renderLogs = (log: string, index: number) => {
        return <li key={index}>{log}</li>;
    };
    const logsRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = (logsRef: any) => {
        logsRef.current.scrollTop = logsRef.current.scrollHeight;
    };
    useEffect(() => {
        scrollToBottom(logsRef);
    });
    // TODO: dodati autoscroller
    return (
        <div className="col-6">
            <div className="log-box" ref={logsRef}>
                <ul>{logs.map((log: string, index: number) => renderLogs(log, index))}</ul>
            </div>
        </div>
    );
};

export default Logs;

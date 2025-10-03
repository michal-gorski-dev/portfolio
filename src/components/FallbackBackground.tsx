const FallbackBackground = () => {
  return (
    <div className='absolute inset-0 overflow-hidden bg-slate-900'>
      <style jsx>{`
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: float 20s infinite linear;
          opacity: 0;
        }

        .particle.p1 {
          background: radial-gradient(
            circle,
            rgba(6, 182, 212, 0.2) 0%,
            rgba(6, 182, 212, 0) 70%
          );
        }
        .particle.p2 {
          background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.15) 0%,
            rgba(139, 92, 246, 0) 70%
          );
          animation-duration: 30s;
        }
        .particle.p3 {
          background: radial-gradient(
            circle,
            rgba(236, 72, 153, 0.15) 0%,
            rgba(236, 72, 153, 0) 70%
          );
          animation-duration: 25s;
        }

        @keyframes float {
          0% {
            transform: translateY(110vh) scale(0.5);
            opacity: 0;
          }
          10%,
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) scale(1);
            opacity: 0;
          }
        }
      `}</style>
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 200 + 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 25;
        const type = (i % 3) + 1;

        return (
          <div
            key={i}
            className={`particle p${type}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}vw`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FallbackBackground;

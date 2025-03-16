function Welcome({ username }) {
  return (
    <div className="text-[#64748B] text-[40px] leading-[normal] font-[600]">
      សួស្តី <span className="text-[#34d399] font-bold">{username}</span>!
      សូមស្វាគមន៍មកកាន់
      <span className="text-primary font-bold"> ស្មៀន</span>
    </div>
  );
}

export default Welcome;

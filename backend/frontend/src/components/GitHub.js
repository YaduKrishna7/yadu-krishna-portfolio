import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = "YaduKrishna7";
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}`;
const REPOS_API = `${GITHUB_API}/repos?sort=updated&per_page=100`;

function GitHub() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    Promise.all([fetch(GITHUB_API), fetch(REPOS_API)])
      .then(async ([profileResponse, reposResponse]) => {
        if (!profileResponse.ok || !reposResponse.ok) throw new Error("GitHub API error");
        const [profileData, reposData] = await Promise.all([
          profileResponse.json(),
          reposResponse.json(),
        ]);
        if (!active) return;
        setProfile(profileData);
        setRepos(reposData.filter((repo) => !repo.fork).slice(0, 6));
      })
      .catch(() => active && setError(true))
      .finally(() => active && setLoading(false));

    return () => { active = false; };
  }, []);

  const formatNumber = (value) => new Intl.NumberFormat("en", { notation: "compact" }).format(value || 0);

  return (
    <section id="github" className="github-section">
      <div className="section-heading">
        <span className="section-kicker">Open source</span>
        <h2>GitHub &amp; <span>Developer Activity</span></h2>
        <p>Explore my public work, repositories and ongoing development activity directly from GitHub.</p>
      </div>

      <div className="github-layout">
        <div className="github-profile-card">
          <div className="github-profile-top">
            <div className="github-avatar-wrap">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="Yadu Krishna GitHub profile" className="github-avatar" />
              ) : (
                <div className="github-avatar github-avatar-placeholder"><i className="fa-brands fa-github"></i></div>
              )}
            </div>
            <div>
              <span className="github-label">GitHub profile</span>
              <h3>{profile?.name || "Yadu Krishna K P"}</h3>
              <p>@{GITHUB_USERNAME}</p>
            </div>
          </div>

          <p className="github-bio">
            {profile?.bio || "Building practical web applications and learning modern software development."}
          </p>

          <div className="github-stats">
            <div><strong>{loading ? "—" : formatNumber(profile?.public_repos)}</strong><span>Repositories</span></div>
            <div><strong>{loading ? "—" : formatNumber(profile?.followers)}</strong><span>Followers</span></div>
            <div><strong>{loading ? "—" : formatNumber(profile?.following)}</strong><span>Following</span></div>
          </div>

          <a className="btn github-main-btn" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
            Visit GitHub <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>

        <div className="github-repositories">
          <div className="github-repositories-heading">
            <div>
              <span className="github-label">Featured</span>
              <h3>Recent repositories</h3>
            </div>
            <a href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noopener noreferrer">View all</a>
          </div>

          {loading && <div className="github-message">Loading public repositories…</div>}
          {!loading && error && (
            <div className="github-message">
              GitHub activity couldn't be loaded right now. You can still visit my profile directly.
            </div>
          )}
          {!loading && !error && repos.length === 0 && (
            <div className="github-message">No public repositories are available yet.</div>
          )}

          <div className="repo-grid">
            {repos.map((repo) => (
              <a className="repo-card" key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <div className="repo-card-top">
                  <i className="fa-regular fa-folder-open"></i>
                  <i className="fa-solid fa-arrow-up-right-from-square repo-arrow"></i>
                </div>
                <h4>{repo.name}</h4>
                <p>{repo.description || "A public development project on GitHub."}</p>
                <div className="repo-meta">
                  {repo.language && <span><i className="fa-solid fa-circle"></i>{repo.language}</span>}
                  <span><i className="fa-regular fa-star"></i>{repo.stargazers_count}</span>
                  <span><i className="fa-solid fa-code-branch"></i>{repo.forks_count}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="github-activity-note">
        <div className="activity-icon"><i className="fa-solid fa-code-commit"></i></div>
        <div>
          <strong>Building, learning and shipping</strong>
          <p>My GitHub profile is the best place to see the latest code and project updates.</p>
        </div>
      </div>
    </section>
  );
}

export default GitHub;

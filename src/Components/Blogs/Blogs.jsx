import React from "react";
import "../styles/BlogsStyle/Blogs.css";
import { Search } from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      category: "Innovation",
      date: "Oct 04, 2024",
      title: "THE TRUE COST OF UNDERESTIMATING A PROJECT",
      description:
        "Explore how inaccurate estimates can lead to budget overruns, delays, and strained client relationships—and how to avoid them.",
      image: "/images/Blog1.png",
    },
    {
      category: "Design",
      date: "Sep 22, 2024",
      title: "FIVE ESSENTIAL MISTAKES DESIGNERS MUST AVOID",
      description:
        "Learn how to navigate design pitfalls and create flawless user experiences with expert tips from industry leaders.",
      image: "/images/Bloggg2.png",
    },
    {
      category: "Development",
      date: "Aug 15, 2024",
      title: "COST CONTROL STRATEGIES FOR BUILDING SUCCESS",
      description:
        "Master the art of cost control to ensure your construction or software projects stay on budget and on time.",
      image: "public/images/Blog3 (2).png",
    },
    {
      category: "Trends",
      date: "Jul 30, 2024",
      title: "REFRESHING INTERIORS: NEW DESIGN TRENDS 2024",
      description:
        "Explore the hottest new trends in interior design for 2024 and learn how to transform your space creatively.",
      image: "/images/Bloggg2.png",
    },
    {
      category: "Architecture",
      date: "Jun 12, 2024",
      title: "A NEW FUTURE IN SUSTAINABLE ARCHITECTURE",
      description:
        "Discover how architects are reshaping the future with sustainable, eco-friendly building designs and technologies.",
      image: "/images/Blog1.png",
    },
  ];

  return (
    <>
      <div className="blogs">
        <h2>Blogs</h2>
        <h1>OUR RECENT BLOGS</h1>
      </div>
      <div className="blogs-main">
        <div className="blogs-left">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-card-image"
              />
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-description">{blog.description}</p>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="blogs-right">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>

          <div className="categories">
            <h3>CATEGORIES</h3>
            <ul>
              <li>
                <span>Categories 1</span>
                <span>(09)</span>
              </li>
              <li>
                <span>Categories 2</span>
                <span>(09)</span>
              </li>
              <li>
                <span>Categories 3</span>
                <span>(09)</span>
              </li>
              <li>
                <span>Categories 4</span>
                <span>(09)</span>
              </li>
              <li>
                <span>Categories 5</span>
                <span>(09)</span>
              </li>
              <li>
                <span>Categories 6</span>
                <span>(09)</span>
              </li>
              <li>
                <span>Categories 7</span>
                <span>(09)</span>
              </li>
            </ul>
          </div>

          <div className="recent-posts">
            <h3>Recent Posts</h3>
            <div className="recent-post-item">
              <img src="/images/Blog1.png" alt="Recent Post 1" />
              <div>
                <p>COMEX approval granted for James Bay</p>
                <span>Oct 10, 2024</span>
              </div>
            </div>
            <div className="recent-post-item">
              <img src="/images/Bloggg2.png" alt="Recent Post 2" />
              <div>
                <p>COMEX approval granted for James Bay</p>
                <span>Oct 04, 2024</span>
              </div>
            </div>
            <div className="recent-post-item">
              <img src="/images/Blog1.png" alt="Recent Post 3" />
              <div>
                <p>COMEX approval granted for James Bay</p>
                <span>Oct 04, 2024</span>
              </div>
            </div>
            <div className="recent-post-item">
              <img src="/images/Blog1.png" alt="Recent Post 3" />
              <div>
                <p>COMEX approval granted for James Bay</p>
                <span>Oct 04, 2024</span>
              </div>
            </div>
            <div className="recent-post-item">
              <img src="/images/Blog1.png" alt="Recent Post 3" />
              <div>
                <p>COMEX approval granted for James Bay</p>
                <span>Oct 04, 2024</span>
              </div>
            </div>
          </div>

          <div className="tags">
            <h3>Tags</h3>
            <div className="tag-list">
              <span>Estimation</span>
              <span>Design</span>
              <span>Building</span>
              <span>Production</span>
              <span>construction</span>
            </div>
          </div>

          <div className="ad-banner">
            <img src="public/images/Banner.png" alt="Ad Banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

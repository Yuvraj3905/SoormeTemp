import React from "react";
import { Link } from "react-router-dom";
import "./Slide.css";
export const ExtraSlideshow = () => {
  return (
    <div classNam="extraSlideShow">
      {/* Deals of the day */}
      <div className="txt">
        <p className="imagesPara">DEALS OF THE DAY </p>
      </div>
      <div className="flexboxes">
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/4/295c703e-ceef-42c2-8fb9-bfa8875acbef1620140568216-Mcaffeine--2-.jpg"
              alt="..."
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/4/ec998c97-27f8-4d1f-891f-12c422fa1e8e1620140653845-Starting-at_149.png"
              alt="Fashion"
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/4/d10d0ccf-9b98-4691-ba8e-b630e2eecf721620140734915-Tops-Tees.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
      </div>

      <div className="txt">
        {/* Categories */}
        <p className="imagesPara">CATEGORIES </p>
      </div>
      <div className="categories">
        <div className="circle">
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
      </div>

      <div className="test">
        {/* test  */}
        <p className="imagesPara">
          <h2>Why Choose us?</h2>
          <ol>
            <li>100% original products</li>
            <li>Free Replacement</li>
            <li>Best customer care services</li>
            <li>Best deals on top brands</li>
            <li>More Than 10000+ Happy Customers</li>
          </ol>
        </p>
      </div>

      <div className="txt">
        <p className="imagesPara">TRENDING IN INDIAN WEAR </p>
      </div>
      {/* INDIAN WEAR */}
      <div className="indian">
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9d248917-d1b0-4910-8de0-4ed7c2b4af8e1595935030939-Content-ethnicwear-trends-printedkurtaset.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a9f68785-e282-425a-b270-c978c387b0f31597840342635-Content-ethnicwear-color-whites.jpg"
              alt=".."
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/0d1e0a28-3088-4719-a692-4cdaa7a33cc71597840342726-Content-ethnicwear-occasion-casuallook.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/99463248-ae80-47de-836f-3bafe2262bff1598029618274-Content-mostselling-Ethnicwear-Kurtasetsbiba.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/e4fe9b08-9d0a-4349-868f-6ac5aa7123ed1595935030800-Content-ethnicwear-trend-Bsummerreadyethnicdresses.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/2ff5c4e9-da10-4d12-9aae-86c38f4c281a1597840342549-Content-ethnicwear-brand-fusiondress.jpg"
              alt="Fashion"
            />
          </Link>
        </div>
      </div>

      {/* TRENDING IN ACCESSORIES */}
      <div className="txt">
        <p className="imagesPara">TRENDING IN ACCESSORIES </p>
      </div>
      <div className="acc">
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg"
              alt="..."
            />
          </Link>
        </div>
        <div>
          {" "}
          <img
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg"
            alt="Fashion"
          />
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png"
              alt="Fashion"
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png"
              alt="Fashion"
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/225f77f5-c299-4849-8586-3ed41b70b1f91597840217917-Content-accessories-brand-imittire.png"
              alt="Fashion"
            />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4dbcc869-ba34-43df-8348-56c7816363c41597840218100-Content-accessories-trend-handcraftedjewel.png"
              alt="Fashion"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

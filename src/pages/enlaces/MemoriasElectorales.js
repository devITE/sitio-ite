import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import "./EnlacesStyle.css";

const Enlaces_imgpath = require.context("../../assets/img/memElect");
const Memorias_pdfpath = require.context("../../assets/pdf/memElect");

export default class MemoriasElectorales extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Memorias Electorales" />
        <div className="Memoria__grid">
          <div className="Memoria__item">
            <div className="Memoria__header w-100">2020 - 2021</div>
            <div>
              <a
                href={Memorias_pdfpath(`./${"10.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid w-100"
                  src={Enlaces_imgpath(`./10.jpg`)}
                  alt="Memoria Electoral del Proceso Electoral 2020-2021"
                />
              </a>
            </div>
          </div>
          <div className="Memoria__item">
            <div className="Memoria__header w-100">2018</div>
            <div>
              <a
                href={Memorias_pdfpath(`./${"9.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid w-100"
                  src={Enlaces_imgpath(`./9.jpg`)}
                  alt="Memoria Electoral del Proceso Electoral 2018"
                />
              </a>
            </div>
          </div>
          <div className="Memoria__item">
            <div className="Memoria__header w-100">2015 - 2016 / 2017</div>
            <div>
              <a
                href={Memorias_pdfpath(`./${"8.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid w-100"
                  src={Enlaces_imgpath(`./8.jpg`)}
                  alt="Memoria Electoral de los Procesos Electoral 2015-2016 y 2017"
                />
              </a>
            </div>
          </div>
          <div className="Memoria__item">
            <div className="Memoria__header w-100">2013</div>
            <div>
              <a
                href={Memorias_pdfpath(`./${"7.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid w-100"
                  src={Enlaces_imgpath(`./7.jpg`)}
                  alt="Memoria Electoral del Proceso Electoral 2013"
                />
              </a>
            </div>
          </div>
          <div className="Memoria__item">
            <div className="Memoria__header w-100">2010</div>
            <div>
              <a
                href={Memorias_pdfpath(`./${"6.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid w-100"
                  src={Enlaces_imgpath(`./6.jpg`)}
                  alt="Memoria Electoral del Proceso Electoral 2010"
                />
              </a>
            </div>
          </div>
          <div className="Memoria__item">
            <div className="Memoria__header w-100">2007</div>
            <div>
              <a
                href={Memorias_pdfpath(`./${"5.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid w-100"
                  src={Enlaces_imgpath(`./5.jpg`)}
                  alt="Memoria Electoral del Proceso Electoral 2007"
                />
              </a>
            </div>
          </div>
          <div className="Memoria__item">
            <div className="Memoria__header w-100">2004</div>
            <div>
              <a
                href={Memorias_pdfpath(`./${"4.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid w-100"
                  src={Enlaces_imgpath(`./4.jpg`)}
                  alt="Memoria Electoral del Proceso Electoral 2004"
                />
              </a>
            </div>
          </div>
          <div className="Memoria__item">
            <div className="Memoria__header w-100">2002</div>
            <div>
              <a
                href={Memorias_pdfpath(`./${"3.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid w-100"
                  src={Enlaces_imgpath(`./3.jpg`)}
                  alt="Memoria Electoral del Proceso Electoral 2002"
                />
              </a>
            </div>
          </div>
          <div className="Memoria__item">
            <div className="Memoria__header w-100">2001</div>
            <div>
              <a
                href={Memorias_pdfpath(`./${"2.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid w-100"
                  src={Enlaces_imgpath(`./2.jpg`)}
                  alt="Memoria Electoral del Proceso Electoral 2001"
                />
              </a>
            </div>
          </div>
          <div className="Memoria__item">
            <div className="Memoria__header w-100">1998</div>
            <div>
              <a
                href={Memorias_pdfpath(`./${"1.pdf"}`)}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid w-100"
                  src={Enlaces_imgpath(`./1.jpg`)}
                  alt="Memoria Electoral del Proceso Electoral 1998"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

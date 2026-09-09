import React from "react";
import { Separator } from "@radix-ui/react-separator";

const DescriptionBlock = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mb-2">
          Описание квартиры
        </h2>
        <Separator className="h-px bg-gradient-to-r from-blue-500 to-transparent w-24 my-4" />

        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p className="text-lg font-light">
            Эта{" "}
            <span className="font-medium text-gray-800">
              современная квартира
            </span>{" "}
            расположена в престижном районе города с панорамным видом на
            центральные улицы.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Планировка
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Просторная гостиная с выходом на балкон</li>
                <li>Изолированная спальня с гардеробной</li>
                <li>Современная кухня-столовая</li>
                <li>Ванная комната с джакузи</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Особенности
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Панорамное остекление</li>
                <li>Встроенная техника премиум-класса</li>
                <li>Система «умный дом»</li>
                <li>Подземный паркинг</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">
            * Полная информация доступна при осмотре объекта.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionBlock;
